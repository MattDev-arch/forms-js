function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const errorMessage = document.getElementById("error-message");

    // Limpar mensagens de erro
    errorMessage.textContent = "";

    // Validação de nome
    if (name.length < 3) {
        errorMessage.textContent = "O nome deve ter pelo menos 3 caracteres.";
        return false;
    }

    // Validação de email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Por favor, insira um email válido.";
        return false;
    }

    // Validação de senha
    if (password.length < 6) {
        errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return false;
    }

    // Verificar confirmação de senha
    if (password !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem.";
        return false;
    }

    // Verificação de data de nascimento
    const birthDate = new Date(dob);
    const today = new Date();
    if (birthDate >= today) {
        errorMessage.textContent = "Por favor, insira uma data de nascimento válida.";
        return false;
    }

    // Validação de telefone
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phone.match(phonePattern)) {
        errorMessage.textContent = "Por favor, insira um telefone válido no formato (99) 99999-9999.";
        return false;
    }

    alert("Registro bem-sucedido!");
    return true;
}
