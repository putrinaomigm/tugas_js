let data = [];
        let no = 1;

        function simpan() {
            const nim = document.getElementById('nim').value;
            const nama = document.getElementById('nama').value;
            const presensiTeori = parseFloat(document.getElementById('presensi-teori').value);
            const tugasTeori = parseFloat(document.getElementById('tugas-teori').value);
            const utsTeori = parseFloat(document.getElementById('uts-teori').value);
            const uasTeori = parseFloat(document.getElementById('uas-teori').value);
            const presensiPraktik = parseFloat(document.getElementById('presensi-praktik').value);
            const tugasPraktik = parseFloat(document.getElementById('tugas-praktik').value);
            const utsPraktik = parseFloat(document.getElementById('uts-praktik').value);
            const uasPraktik = parseFloat(document.getElementById('uas-praktik').value);

            const nilaiAkhirTeori = (presensiTeori + tugasTeori + utsTeori + uasTeori) / 4;
            const nilaiAkhirPraktik = (presensiPraktik + tugasPraktik + utsPraktik + uasPraktik) / 4;
            const nilaiAkhir = (nilaiAkhirTeori + nilaiAkhirPraktik) / 2;

            let grade;
            if (nilaiAkhir >= 80) grade = 'A';
            else if (nilaiAkhir >= 70) grade = 'B';
            else if (nilaiAkhir >= 60) grade = 'C';
            else if (nilaiAkhir >= 50) grade = 'D';
            else grade = 'E';

            data.push({
                no: no++,
                nim,
                nama,
                presensiTeori,
                tugasTeori,
                utsTeori,
                uasTeori,
                nilaiAkhirTeori,
                presensiPraktik,
                tugasPraktik,
                utsPraktik,
                uasPraktik,
                nilaiAkhirPraktik,
                nilaiAkhir,
                grade
            });

            renderTable();
            resetForm();
        }

        function renderTable() {
            const tableBody = document.getElementById('data-table');
            tableBody.innerHTML = '';

            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.no}</td>
                    <td>${item.nim}</td>
                    <td>${item.nama}</td>
                    <td>${item.presensiTeori}</td>
                    <td>${item.tugasTeori}</td>
                    <td>${item.utsTeori}</td>
                    <td>${item.uasTeori}</td>
                    <td>${item.nilaiAkhir}</td>
                    <td>${item.grade}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        function resetForm() {
            document.getElementById('nim').value = '';
            document.getElementById('nama').value = '';
            document.getElementById('presensi-teori').value = '';
            document.getElementById('tugas-teori').value = '';
            document.getElementById('uts-teori').value = '';
            document.getElementById('uas-teori').value = '';
            document.getElementById('presensi-praktik').value = '';
            document.getElementById('tugas-praktik').value = '';
            document.getElementById('uts-praktik').value = '';
            document.getElementById('uas-praktik').value = '';
        }