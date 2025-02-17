pipeline {
  agent any

    stages {
      stage('Hello') {
        steps {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/issa2580/ConnecToCloud.git']])
        }
      }
      stage('Build and test'){
        steps {
          script {
            nodejs(nodeJSInstallationName: 'nodejs'){
              sh '''
              npm install -g yarn
              yarn install
              '''
            }
          }
        }
      }
      stage('OWASP FS SCAN') {
        steps {
            dependencyCheck additionalArguments: '--scan ./package.json, ./yarn.lock --disableYarnAudit --disableNodeAudit --noupdate', odcInstallation: 'DP-Check'
            dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
        }
      }
    }
}
