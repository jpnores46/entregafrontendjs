function validarFormulario(e) {
    const n = document.getElementById('nombre').value.trim();
    const m = document.getElementById('email').value.trim();
    const s = document.getElementById('mensaje').value.trim();
    if (!n || !m || !s) { alert('Por favor completá todos los campos.'); e.preventDefault(); return false; }
    return true;
}
