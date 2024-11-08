function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const photoInput = document.getElementById('photo');

    document.getElementById('previewName').innerText = name;
    document.getElementById('previewEmail').innerText = email;
    document.getElementById('previewPhone').innerText = phone;
    document.getElementById('previewLinkedin').innerText = linkedin;
    document.getElementById('previewGithub').innerText = github;
    document.getElementById('previewExperience').innerText = experience;
    document.getElementById('previewEducation').innerText = education;

    const previewPhoto = document.getElementById('previewPhoto');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        previewPhoto.style.display = 'none'; 
    }

    document.getElementById('resumeForm').style.display = 'none';
    document.getElementById('resumePreview').style.display = 'block';
}
function downloadPDF() {
    const resumeElement = document.getElementById('resumePreview');
    const options = {
        margin:       0.5,
        filename:     'Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(resumeElement).save();
}
