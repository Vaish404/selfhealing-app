pipeline {
  agent any

  environment {
    IMAGE = "vaishnavigandhare23/cloudguard"
  }

  stages {

    stage('Build React App') {
      steps {
        sh '''
          cd frontend
          npm install
          npm run build
        '''
      }
    }

    stage('Docker Build') {
      steps {
        sh "docker build -t $IMAGE:latest ."
      }
    }

    stage('Docker Login & Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
          sh "echo $PASS | docker login -u $USER --password-stdin"
          sh "docker push $IMAGE:latest"
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl --kubeconfig=/var/lib/jenkins/.kube/config apply -f k8s-deployment.yaml'
      }
    }
  }
}

