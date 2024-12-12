"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const previewContent = document.getElementById('preview-content');
    const saveDraftBtn = document.getElementById('save-draft');
    const downloadPdfBtn = document.getElementById('download-pdf');
    function generateResume() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;
        const template = document.getElementById('template').value;
        previewContent.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
      `;
        switch (template) {
            case 'basic':
                previewContent.style.fontFamily = 'Arial, sans-serif';
                break;
            case 'modern':
                previewContent.style.fontFamily = 'Helvetica, sans-serif';
                previewContent.style.color = '#007bff';
                break;
            case 'creative':
                previewContent.style.fontFamily = 'Cursive';
                previewContent.style.color = '#ff5722';
                break;
        }
    }
    saveDraftBtn.addEventListener('click', () => {
        const resumeData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            skills: document.getElementById('skills').value,
            experience: document.getElementById('experience').value,
            template: document.getElementById('template').value,
        };
        localStorage.setItem('resumeDraft', JSON.stringify(resumeData));
        alert('Draft saved successfully!');
    });
    function loadDraft() {
        const draft = JSON.parse(localStorage.getItem('resumeDraft') || 'null');
        if (draft) {
            document.getElementById('name').value = draft.name;
            document.getElementById('email').value = draft.email;
            document.getElementById('skills').value = draft.skills;
            document.getElementById('experience').value = draft.experience;
            document.getElementById('template').value = draft.template;
            generateResume();
        }
    }
    downloadPdfBtn.addEventListener('click', () => {
        window.print();
    });
    form.addEventListener('input', generateResume);
    loadDraft();
});
