import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, PROJECTS, SKILL_CATEGORIES, CERTIFICATES } from '../data/portfolioData';

export const downloadResumeAsHTML = () => {
  const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resume - ${PERSONAL_INFO.name}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body {
      font-family: 'Inter', sans-serif;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.5;
      padding: 40px;
      max-width: 850px;
      margin: 0 auto;
    }
    h1 { font-size: 28px; margin: 0 0 4px 0; color: #0f172a; }
    h2 { font-size: 16px; text-transform: uppercase; letter-spacing: 1px; color: #db2777; border-bottom: 2px solid #fce7f3; padding-bottom: 4px; margin-top: 24px; margin-bottom: 12px; }
    h3 { font-size: 15px; margin: 0; color: #0f172a; }
    .subtitle { color: #64748b; font-size: 14px; margin-bottom: 12px; }
    .contact-info { display: flex; flex-wrap: wrap; gap: 16px; font-size: 12px; color: #475569; margin-bottom: 20px; }
    .section-item { margin-bottom: 16px; }
    .item-header { display: flex; justify-content: space-between; align-items: baseline; }
    .company { font-weight: 600; color: #4f46e5; font-size: 13px; }
    .date { font-size: 12px; color: #64748b; font-weight: 500; }
    ul { margin: 6px 0 0 0; padding-left: 18px; font-size: 13px; color: #334155; }
    li { margin-bottom: 4px; }
    .tech-pill { display: inline-block; background: #fdf2f8; color: #be185d; border: 1px solid #fbcfe8; padding: 2px 8px; border-radius: 6px; font-size: 11px; margin: 2px; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; }
    @media print {
      body { padding: 0; }
      @page { margin: 15mm; }
    }
  </style>
</head>
<body>
  <h1>${PERSONAL_INFO.name}</h1>
  <div class="subtitle"><strong>${PERSONAL_INFO.role}</strong> | Final-Year IT Undergraduate @ SLIIT</div>
  <div class="contact-info">
    <span>📍 ${PERSONAL_INFO.location}</span>
    <span>✉️ ${PERSONAL_INFO.email}</span>
    <span>🔗 github.com/UdeshaRashmi</span>
    <span>💼 linkedin.com/in/udesha-rashmi</span>
  </div>

  <h2>Summary</h2>
  <p style="font-size: 13px; color: #334155; line-height: 1.6;">${PERSONAL_INFO.about}</p>

  <h2>Education</h2>
  <div class="section-item">
    <div class="item-header">
      <h3>${EDUCATION_DATA.degree}</h3>
      <span class="date">${EDUCATION_DATA.period}</span>
    </div>
    <div class="company">${EDUCATION_DATA.institution}</div>
    <ul>
      ${EDUCATION_DATA.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>
  </div>

  <h2>Professional Experience</h2>
  ${EXPERIENCES.map(exp => `
    <div class="section-item">
      <div class="item-header">
        <h3>${exp.role}</h3>
        <span class="date">${exp.period}</span>
      </div>
      <div class="company">${exp.company} • ${exp.location}</div>
      <ul>
        ${exp.description.map(d => `<li>${d}</li>`).join('')}
      </ul>
      <div style="margin-top: 6px;">
        ${exp.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('')}

  <h2>Key Projects</h2>
  ${PROJECTS.map(proj => `
    <div class="section-item">
      <div class="item-header">
        <h3>${proj.title}</h3>
        <span class="date">${proj.badge || proj.category}</span>
      </div>
      <p style="font-size: 12.5px; color: #475569; margin: 2px 0 4px 0;">${proj.description}</p>
      <ul>
        ${proj.detailedPoints.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <div style="margin-top: 4px;">
        ${proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('')}

  <h2>Technical Skills</h2>
  <div class="skills-grid">
    ${SKILL_CATEGORIES.map(cat => `
      <div><strong>${cat.title}:</strong> ${cat.skills.map(s => s.name).join(', ')}</div>
    `).join('')}
  </div>

  <h2>Verified Certifications</h2>
  <ul>
    ${CERTIFICATES.map(c => `<li><strong>${c.title}</strong> — ${c.issuer}</li>`).join('')}
  </ul>

  <script>
    window.onload = function() {
      // Auto trigger print to save as PDF if opened directly
    }
  </script>
</body>
</html>`;

  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Udesha_Rashmi_Resume.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
