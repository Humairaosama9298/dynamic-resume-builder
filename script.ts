document.addEventListener('DOMContentLoaded', () => {
    const form: HTMLFormElement = document.getElementById('resume-form') as HTMLFormElement;
    const previewContent: HTMLElement = document.getElementById('preview-content') as HTMLElement;
    const saveDraftBtn: HTMLElement = document.getElementById('save-draft') as HTMLElement;
    const downloadPdfBtn: HTMLElement = document.getElementById('download-pdf') as HTMLElement;
  
    interface ResumeData {
      name: string;
      email: string;
      skills: string;
      experience: string;
      template: string;
    }
  
    function generateResume() {
      const name: string = (document.getElementById('name') as HTMLInputElement).value;
      const email: string = (document.getElementById('email') as HTMLInputElement).value;
      const skills: string = (document.getElementById('skills') as HTMLInputElement).value;
      const experience: string = (document.getElementById('experience') as HTMLInputElement).value;
      const template: string = (document.getElementById('template') as HTMLSelectElement).value;
  
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
      const resumeData: ResumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLInputElement).value,
        experience: (document.getElementById('experience') as HTMLInputElement).value,
        template: (document.getElementById('template') as HTMLSelectElement).value,
      };
  
      localStorage.setItem('resumeDraft', JSON.stringify(resumeData));
      alert('Draft saved successfully!');
    });
  
    function loadDraft() {
      const draft: ResumeData | null = JSON.parse(localStorage.getItem('resumeDraft') || 'null');
      if (draft) {
        (document.getElementById('name') as HTMLInputElement).value = draft.name;
        (document.getElementById('email') as HTMLInputElement).value = draft.email;
        (document.getElementById('skills') as HTMLInputElement).value = draft.skills;
        (document.getElementById('experience') as HTMLInputElement).value = draft.experience;
        (document.getElementById('template') as HTMLSelectElement).value = draft.template;
        generateResume();
      }
    }
  
    downloadPdfBtn.addEventListener('click', () => {
      window.print();
    });
  
    form.addEventListener('input', generateResume);
  
    loadDraft();
  });
  