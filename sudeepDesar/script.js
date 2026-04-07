
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('full-img');
const images = Array.from(document.querySelectorAll('.gallery-item img'));
let currentIndex = 0;

// ฟังก์ชันสำหรับอัปเดตรูปใน Modal
const updateModalImage = (index) => {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
};

// คลิกที่รูปเพื่อเปิด Modal
images.forEach((img, index) => {
    img.style.cursor = 'zoom-in';
    img.onclick = () => {
        modal.style.display = 'flex';
        updateModalImage(index);
        document.body.classList.add('no-scroll');
    };
});

// ปิด Modal เมื่อคลิกที่พื้นหลัง
modal.onclick = () => {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
};

// เพิ่มระบบกดปุ่ม Keyboard
window.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowRight') { // กดขวา -> รูปถัดไป
            let nextIndex = (currentIndex + 1) % images.length;
            updateModalImage(nextIndex);
        } 
        else if (e.key === 'ArrowLeft') { // กดซ้าย -> รูปก่อนหน้า
            let prevIndex = (currentIndex - 1 + images.length) % images.length;
            updateModalImage(prevIndex);
        } 
        else if (e.key === 'Escape') { // กด Esc -> ปิด Modal
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    }
});

