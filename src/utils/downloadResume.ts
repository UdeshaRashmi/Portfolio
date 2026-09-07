export const RESUME_PDF_PATH = '/Udesha_Rashmi_CV.pdf';

export const downloadResumeAsHTML = () => {
  const a = document.createElement('a');
  a.href = RESUME_PDF_PATH;
  a.download = 'Udesha_Rashmi_CV.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
