document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;

    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let dinheiro = document.querySelector('input[name="dinheiro"]:checked');
    let impulso = document.querySelector('input[name="impulso"]:checked');

    let cpfsCadastrados = ["123", "456", "789"];

    if(nome.length < 3) return alert("Nome inválido");
    if(!email.includes("@")) return alert("Email inválido");
    if(telefone.length < 8) return alert("Telefone inválido");
    if(cpfsCadastrados.includes(cpf)) return alert("CPF já cadastrado");
    if(idade < 18) return alert("Menor de idade");
    if(cidade == "") return alert("Cidade obrigatória");
    if(moradia == "") return alert("Selecione moradia");
    if(!quintal) return alert("Informe quintal");
    if(!pet) return alert("Informe se já teve pet");
    if(isNaN(horas) || horas == "") return alert("Horas inválidas");
    if(motivo.length < 10) return alert("seus motivos nao me convenceram");
    if(!termo) return alert("Aceita o termo ai ");



    document.getElementById("resultado").innerHTML = `
        <h3>Dados enviados:</h3>
        
    `;
});