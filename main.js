function searchName() {
    const name = document.getElementById("nameInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
  
    // Data dummy disimpan dalam array of objects
    const dataDummy = [
      { name: "fachri", description: "Fachri adalah ketua kelas kita semasa SMK, dia orangnya banyak omong, ngatur, tapi tidak galak, kadang suka membantu temannya." },
      { name: "ahmad", description: "Ahmad adalah teman baik kita yang selalu rajin dan pandai, dia sering membantu teman lain dalam pelajaran." },
      { name: "siti", description: "Siti adalah teman sekelas yang sangat tenang dan sabar, selalu membantu jika ada yang butuh pertolongan." },
      { name: "nurul", description: "Nurul adalah seorang yang ceria dan selalu membawa energi positif ke dalam kelas." },
      { name: "yusuf", description: "Yusuf dikenal sebagai orang yang sangat pendiam, tapi pandai dan berbakat dalam matematika." },
      { name: "budi", description: "Budi adalah teman yang selalu humoris dan suka membuat suasana menjadi menyenangkan di kelas." },
      { name: "dina", description: "Dina sangat rajin dan sering membantu teman-temannya mengerjakan tugas kelompok." }
    ];
  
    // Cari nama dalam array
    const result = dataDummy.find(person => person.name === name);
  
    // Jika ditemukan, tampilkan deskripsinya, jika tidak tampilkan pesan tidak ditemukan
    let description = result ? result.description : "Nama tidak ditemukan.";
  
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "<h3>Hasil:</h3><p>" + description + "</p>";
  }