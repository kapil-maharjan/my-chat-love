const apiKey = "3a28e81564a4077bb705cdaab16381fb";
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

async function getWeather(city) {
    try {
        // แก้ไขบรรทัด fetch ด้านล่างนี้
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=th`
        );
        
        if (!response.ok) {
            throw new Error("หาเมืองนี้ไม่เจอครับ หรือ API Key ยังไม่พร้อมใช้งาน");
        }

        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        alert(error.message);
    }
}


function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('desc').innerText = data.weather[0].description;
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert("กรุณาใส่ชื่อเมือง");
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(cityInput.value);
    }
});

// เอกสารสำหรับการขออยู่ต่อไปในประเทศไทยโดยใช้วีซ่าแต่งงานครั้งแรก
const documentsList = document.getElementById('documents');
const documents = [
    "1. หนังสือรับรองสถานโสดจากเนปาล พร้อมแปลไทยและได้รับตราประทับจากกรมการกงสุลในประเทศไทย พร้อมสำเนา",
    "2. หนังสือรับรองพาสปอร์ตจากสถานทูตเนปาลในประเทศไทย พร้อมแปลไทยและได้รับตราประทับจากกรมการกงสุลในประเทศไทย พร้อมสำเนา",
    "3. หนังสือรับรอง Affidavit จากสถานทูตเนปาลในประเทศไทย พร้อมแปลไทยและได้รับตราประทับจากกรมการกงสุลในประเทศไทย พร้อมสำเนา",
    "4. สมุดบัญชีธนาคารมีเงินฝากขั้นต่ำ 400,000 บาทขึ้นไป แช่ไว้ในบัญชีส่วนตัวอย่างน้อย 2 เดือนก่อนขอยื่นวีซ่าแต่งงาน พร้อมสำเนา",
    "5. ที่มาของเงินฝากในบัญชีธนาคาร",
    "5. ขอหนังสือรับรองฐานการเงินจากธนาคาร (ใบนี้มีเวลาใช้ได้แค่ 7 วันเอง)",
    "6. หนังสือรับรองความประพฤติจากสำนักงานตำรวจแห่งชาติในประเทศไทย (Police Clearance Certificate)",
    "7. Thai E Visa Non-Immigrant O Marriage-visa",
    "8. ใบสมรส (ผมจดทะเบียนในไทย) พร้อมสำเนา",
    "9. ทะเบียนสมรส พร้อมสำเนา",
    "10. Thailand Digital Arrival Card (TDAC)",
    "11. สำเนาบัตรประชาชนของคู่สมรสชาวไทย พร้อมฉบับจริง",
    "12. สำเนาทะเบียนบ้านของคู่สมรสชาวไทย",
    "13. คัดสำเนาทะเบียนบ้าน",
    "14. รูปถ่ายคู่ สัก 4-5 รูป ภายในบ้าน",
    "15. แผนที่จากที่อยู่ปัจจุบันจนถึง ตม. แจ้งวัฒนะ",
    "16. ใบแจ้ง(ค่าน้ำ-ไฟ)",
    "17. ถ้าเช่าห้องอยู่ ต้องมีสำเนาบัตรประชาชนของเจ้าของหอพัก พร้อมสำเนาทะเบียนบ้านของเจ้าของหอพัก",
    "18. หนังสือสัญญาเช่า พร้อมสำเนา",
    "19. หนังสือรับรองที่พักอาศัย",
    "20. ตม.30 (ทั้งออนไลน์และออฟไลน์)",
    "21. ตม.7(พร้อมแนบรูปถ่าย), สตม.2, สตม.9, สตม.10, สตม.11",
];

documents.forEach(doc => {
    const li = document.createElement('li');
    li.textContent = doc;
    documentsList.appendChild(li);
});

