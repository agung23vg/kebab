// Event listener untuk formulir
document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah submit form default

    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const menuItem = document.getElementById("menu-item").value;
    const quantity = document.getElementById("quantity").value;

    // Format pesan untuk WhatsApp
    const message = `Halo, saya ingin memesan:\n- Nama: ${name}\n- Menu: ${menuItem}\n- Jumlah: ${quantity}`;

    // Nomor WhatsApp tujuan (ubah dengan nomor Anda)
    const phoneNumber = "+628223881917"; // Gunakan format internasional tanpa tanda "+" (contoh: 628 untuk Indonesia)

    // Redirect ke WhatsApp
    const whatsappURL = `wa.me/+6288223881917${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});
