const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http); // บรรทัดนี้ห้ามแก้ เป็นการดึง library มาใช้

// ส่งไฟล์ index.html เมื่อเปิดหน้าเว็บ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// เมื่อมีการเชื่อมต่อ (Connection)
io.on('connection', (socket) => {
    console.log('มีคนเชื่อมต่อเข้ามา: ' + socket.id);

    // รับข้อความ 'chat message'
    socket.on('chat message', (data) => {
        // ส่งกระจายไปให้ทุกคน
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('คนออกไปแล้ว');
    });
});

const PORT = process.env.PORT || 3000; 

http.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

