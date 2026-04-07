document.getElementsByClassName('changeAddress')[0].textContent = 'Rama II Road, Subdistrict: Samae, District: Bang Khun Thian, Bangkok 10150';


const wantedJobs = [
    'International Trade Agent',
    'English Teacher',
    'Frond-End Developer',
    'Graphics Designer',
    'Customer Service Representative',
];

let jobList = document.getElementById('js-jobList');

wantedJobs.forEach(job => {
const newList = document.createElement('li');

  newList.textContent = job;
  jobList.append(newList);
});

const education = [{
    year: '2009 - 2013',
    institution: 'Mahachulalongkorn Buddhist University',
    level: 'Bachelor\'s degree in Humanities',
    subjects: 'English(Linguistics and Buddhist Theology)'
},
{
    year: '2005 - 2009',
    institution: 'Wat Sra Riang Buddhist School',
    level: 'Primary Plus High School(M.2 - M.6)',
    subjects: 'General subjects & Buddhist subjects'
},
{
    year: '2000 - 2004',
    institution: 'Ujjwal Shishu Niketan Boarding High School',
    level: 'UKG, Secondary Level',
    subjects: 'General Subjects'
}];

let addStudy = '';

education.forEach((study, index) => {
   // ใส่คลาส hidden-edu ให้อันที่ 2 เป็นต้นไป
   const hideClass = (index > 0) ? 'hidden-edu' : ''; 
   const anchorLink = (index === 0)
        ? '<span class="special-link"><a href="https://postimg.cc/gallery/syzj2k7" target="_blank">Transcript</a></span>' 
        : '';
    addStudy += `
    <div class="studyTime ${hideClass}"> 
        Year: ${study.year}
        <h4>Institution: ${study.institution}</h4>
        <p>Level: ${study.level}</p>
        Major Subjects: ${study.subjects} ${anchorLink}<br><hr>
    </div>
    `;
});

// ตรวจสอบให้มั่นใจว่าใช้ #studyContainer
document.querySelector('#studyContainer').innerHTML = addStudy;

const showMoreEduBtn = document.getElementById('showMoreEdu');

showMoreEduBtn.addEventListener('click', function() {
    const hiddenEdus = document.querySelectorAll('.hidden-edu');

    hiddenEdus.forEach(item => {
        // เช็คสถานะการแสดงผล
        if (item.style.display === 'block') {
            item.style.display = 'none';
            showMoreEduBtn.textContent = '▼ Show More Education';
        } else {
            item.style.display = 'block';
            showMoreEduBtn.textContent = '▲ Show Less';
        }
    });
});

//Work Experience

const works = [{
    year: '2017 - 2020',
    company: 'Synturn (M) Sdn. Bhd.',
    location: 'No.6, Jalan Istimewa 7, Ulu Tiram 81800, Johor Bahru, Malaysia.',
    position: 'QA Auditor, Translator',
    duties: 'Translate Eng-Nepali, Nepali-Eng; Auditor, Quality Assurance in QA lab and Production Area. Check employees\' daily duties to ensure the everyday job is ongoing well. Train newcomers by teaching them about Technical Drawing, Basic use of equipment: Micrometre, Profile-projector, and Paperwork.'
},{
    year: '2014 - 2015',
    company: 'Thai Rung United Engineering Co., Ltd.',
    location: 'Sedtakij 1 Road T. Kaerai, A. Kratumban, Samudsakorn 74110',
    position: 'Export Salesman',
    duties: 'Overseas coordinator, Liaison, Translate Eng-Thai, Thai-Eng; Sales, and Documentation.'
},{
    year: '2014 - 2014',
    company: '3D Orchids and Etc Co., Ltd.',
    location: 'Krathumban, Samutsakorn 74110',
    position: 'Customer Service Representative',
    duties: 'Have good contact with existing customers as well as search for new clients, Correspondence by Email, Immediate phone call, if necessary, Performa Invoice, Documentation, and Communication.'
}, {
        year: '2013 - 2014',
    company: 'CRR Product Co., Ltd.',
    location: 'Chaiyaphreuk 13. Talingchan, Bangkok',
    position: 'Export Officer',
    duties: 'Search clients, Correspondence by email, Increase email subscribers by 20 percent in six months, A phone call, Proforma Invoice, Communication, Shipping.'
}];

let addWork = '';

works.forEach((work, index) => {

    const hideClass = (index > 0) ? 'hidden-work' : '';

  addWork += `
  <div class="workTime ${hideClass}">
    Year: ${work.year} <br>
    <h4>Company: ${work.company}</h4>
    Location: ${work.location} <br>
    Position: ${work.position} <br>
    Job Duties: ${work.duties}
    <hr>
  </div>`
});

document.querySelector('#workContainer').innerHTML = addWork;

// --- Logic สำหรับการคลิก Show More ---
const showMoreBtn = document.getElementById('showMoreWork');

showMoreBtn.addEventListener('click', function() {
    
    const hiddenWorks = document.querySelectorAll('.hidden-work');

    hiddenWorks.forEach(item => {
        if (item.style.display === 'block') {
            item.style.display = 'none';
            showMoreBtn.textContent = '▼ Show More Experiences';
        } else {
            item.style.display = 'block';
            showMoreBtn.textContent = '▲ Show Less';
        }
    });
});

//References
const referPeople = [{
    name: 'Dr Veerakan Kanokkamalabe',
    position: 'Lecturer',
    institution: 'Mahachulalongkorn Buddhist University',
    address: 'Wangnoi Ayutthaya',
    number: '+66 0891465842',
    email: 'Vee.veerakarn@gmail.com'
},{
    name: 'Mr Kasem Koompondsyn',
    position: 'MDRT Advisor & Agency Manager',
    institution: 'AIA (Thailand)',
    address: 'Pathumwan, BKK 10332',
    number: '+66 0864487338',
    email: '2016aia@gmail.com' 
},{
    name: 'Mr. Shankar Maharjan',
    position: 'Government Officer',
    institution: 'Geology Department Office',
    address: 'Kathmandu, Nepal',
    number: '+977 9841372458',
    email: 'shankar331484@gmail.com' 
}
];

let addPerson = '';

referPeople.forEach((person) => {
    addPerson += `
    <div class="referPeople">
    Name: ${person.name} <br>
    Position: ${person.position} <br>
    <h4>Institution: ${person.institution}</h4>
    Address: ${person.address} <br>
    Contact: ${person.number} <br>
    Email: ${person.email} <br>
    <hr>
  </div>
    `;
});


document.querySelector('.referContainer').innerHTML = addPerson;