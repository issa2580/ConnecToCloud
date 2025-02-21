pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'martinez42/connectocloud'
    DOCKER_TAG = 'latest'
  }

    stages {

      stage('Hello') {
        steps {
            checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/issa2580/ConnecToCloud.git']])
        }
      }

      // stage('Install dependancies'){
      //   steps {
      //     script {
      //       nodejs(nodeJSInstallationName: 'nodejs'){
      //         sh '''
      //         npm install -g yarn
      //         yarn install
      //         '''
      //       }
      //     }
      //   }
      // }

      // stage('Dependancies Check') {
      //   steps {
      //       dependencyCheck additionalArguments: '--scan ./ --disableYarnAudit --disableNodeAudit --format HTML', odcInstallation: 'DP-Check'
      //       dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
      //   }
      // }

      // stage('Sonarqube analisys') {
      //   steps {
      //     script {
      //       nodejs(nodeJSInstallationName: 'nodejs') {
      //         withSonarQubeEnv('sonar') {
      //           sh '''
      //           npm install -g yarn
      //           yarn add sonar-scanner
      //           yarn sonar
      //           '''
      //         }
      //       }
      //     }
      //   }
      // }

      // stage('Quality gates analysis'){
      //   steps {
      //     script {
      //       waitForQualityGate abortPipeline: false, credentialsId: 'token-sonar'
      //     }
      //   }
      // }

      // stage("Build and Push docker image"){
      //   steps {
      //     script {
      //       withDockerRegistry(credentialsId: 'docker-hub') {
      //       sh '''
      //         docker --version
      //         docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} -f Dockerfile .
      //         docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
      //       '''
      //       }
      //     }
      //   }
      // }
      
      stage("Trivy Scan") {
        steps {
          // script {
          //   sh ('docker run -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image martinez42/connectocloud:latest --no-progress --scanners vuln --exit-code 0 --severity HIGH,CRITICAL --format table > trivy_scan_result.txt 2>&1')
          // }
          script {
              sh 'docker run -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/trivy-tmp:/tmp aquasec/trivy image martinez42/connectocloud:latest --no-progress --scanners vuln --exit-code 0 --severity HIGH,CRITICAL --format table > trivy_scan_result.txt 2>&1 || true'
          }
        }
      }
    }
}
