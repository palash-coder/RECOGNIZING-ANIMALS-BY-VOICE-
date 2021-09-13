function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Fu0OsxwMn/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}