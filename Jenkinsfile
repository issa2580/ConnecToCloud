pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/issa2580/ConnecToCloud.git']])
            }
        }
        stage('Installation Dependancies') {
          steps {
            script {
              nodejs(nodeJSInstallationName: 'nodejs') {
                sh '''
                npm install -g yarn
                yarn install
                '''
              }
            }
          }
        }

        stage('Dependancies Check') {
          steps {
              dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit --format HTML', odcInstallation: 'DP-Check'
              dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
          }
        }
    }
}
