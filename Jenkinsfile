pipeline {
    agent any

    stages {

        stage('Check Docker') {
            steps {
                bat 'docker version'
            }
        }

        stage('Checkout GitHub') {
            steps {
                git branch: 'feature-new-tests',
                    url: 'https://github.com/Chandresh-k01/playwrightAutomation.git'
            }
        }

        stage('Create CI Workspace Volume') {
            steps {
                bat '''
                    echo ===== CREATING DOCKER CI VOLUME =====

                    docker volume create playwright-ci-workspace-%BUILD_NUMBER%

                    echo ===== COPYING JENKINS WORKSPACE TO DOCKER VOLUME =====

                    docker run --rm ^
                      -v "%WORKSPACE%:/source" ^
                      -v "playwright-ci-workspace-%BUILD_NUMBER%:/work" ^
                      alpine:latest ^
                      sh -c "cp -r /source/. /work/"
                '''
            }
        }

        stage('Verify Docker Workspace') {
            steps {
                bat '''
                    echo ===== VERIFYING PROJECT FILES =====

                    docker run --rm ^
                      -v "playwright-ci-workspace-%BUILD_NUMBER%:/work" ^
                      alpine:latest ^
                      sh -c "ls -l /work/package.json && ls -l /work/playwright.config.js && ls -l /work/SmokeTest/SmokeTest.spec.js"
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    echo ===== INSTALLING NPM DEPENDENCIES =====

                    docker run --rm ^
                      -v "playwright-ci-workspace-%BUILD_NUMBER%:/work" ^
                      -w /work ^
                      playwright-tests:latest ^
                      npm ci
                '''
            }
        }

        stage('Run Playwright Smoke Tests') {
            steps {
                bat '''
                    echo ===== RUNNING PLAYWRIGHT SMOKE TEST =====

                    docker run --rm ^
                      -e CI=true ^
                      -v "playwright-ci-workspace-%BUILD_NUMBER%:/work" ^
                      -w /work ^
                      playwright-tests:latest ^
                      npx playwright test SmokeTest/SmokeTest.spec.js --project=chromium
                '''
            }
        }
    }

    post {
        always {

            echo '===== COPYING REPORTS FROM DOCKER VOLUME ====='

            bat '''
                docker run --rm ^
                  -v "playwright-ci-workspace-%BUILD_NUMBER%:/work" ^
                  -v "%WORKSPACE%:/output" ^
                  alpine:latest ^
                  sh -c "mkdir -p /output/playwright-report /output/allure-results /output/test-results; cp -r /work/playwright-report/. /output/playwright-report/ 2>/dev/null || true; cp -r /work/allure-results/. /output/allure-results/ 2>/dev/null || true; cp -r /work/test-results/. /output/test-results/ 2>/dev/null || true"
            '''

            echo '===== CHECKING REPORT FILES ====='

            bat '''
                echo ===== PLAYWRIGHT REPORT =====
                if exist playwright-report (
                    dir playwright-report
                ) else (
                    echo No playwright-report found
                )

                echo ===== ALLURE RESULTS =====
                if exist allure-results (
                    dir allure-results
                ) else (
                    echo No allure-results found
                )

                echo ===== TEST RESULTS =====
                if exist test-results (
                    dir test-results
                ) else (
                    echo No test-results found
                )
            '''

            echo '===== ARCHIVING TEST REPORTS ====='

            archiveArtifacts artifacts: '''
                playwright-report/**,
                allure-results/**,
                test-results/**
            ''',
            allowEmptyArchive: true,
            fingerprint: true

            echo '===== PUBLISHING PLAYWRIGHT HTML REPORT ====='

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            echo '===== CLEANING CI DOCKER VOLUME ====='

            bat '''
                docker volume rm playwright-ci-workspace-%BUILD_NUMBER% || exit /b 0
            '''
        }
    }
}