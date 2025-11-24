/**
 * ===================================================
 * ARQUIVO app.js - JavaScript Puro (Vanilla JS)
 * Responsável por toda a interação do DOM e eventos.
 * ===================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. ATUALIZAÇÃO DO ANO NO RODAPÉ
    // Seleciona o elemento com o ID 'year' e insere o ano atual.
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ---------------------------------------------------
    
    // 2. FUNCIONALIDADE DO MENU MOBILE
    // Obtém referências para o botão de alternância e o menu dropdown.
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Verifica se os elementos existem antes de adicionar o ouvinte.
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            // A função 'classList.toggle()' adiciona a classe se ela não estiver presente
            // e remove se estiver, alternando a visibilidade.
            // A classe 'hidden' deve estar definida no CSS para 'display: none'.
            mobileMenu.classList.toggle('hidden');
        });
        
        // Fechar o menu mobile ao clicar em um link interno
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Adiciona a classe 'hidden' para fechar o menu após a navegação.
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ---------------------------------------------------

    // 3. SELETOR DE IDIOMA (Integração com i18n)
    // Seleciona os dropdowns de idioma (desktop e mobile).
    const langSelectDesktop = document.getElementById('langSelect');
    const langSelectMobile = document.getElementById('langSelectMobile');
    
    // Função que manipula a mudança de idioma
    const handleLangChange = (event) => {
        const newLang = event.target.value;
        // Chama a função de tradução que deve estar definida em i18n.js
        if (typeof setLanguage === 'function') {
            setLanguage(newLang);
        }
        
        // Sincroniza os seletores de idioma
        if (langSelectDesktop && langSelectDesktop !== event.target) {
            langSelectDesktop.value = newLang;
        }
        if (langSelectMobile && langSelectMobile !== event.target) {
            langSelectMobile.value = newLang;
        }
    };
    
    // Adiciona o ouvinte de eventos a ambos os seletores.
    if (langSelectDesktop) {
        langSelectDesktop.addEventListener('change', handleLangChange);
    }
    if (langSelectMobile) {
        langSelectMobile.addEventListener('change', handleLangChange);
    }
    
    // Opcional: Chamada inicial para carregar o idioma padrão ao carregar a página
    if (typeof setLanguage === 'function') {
        const initialLang = langSelectDesktop ? langSelectDesktop.value : (langSelectMobile ? langSelectMobile.value : 'pt');
        setLanguage(initialLang);
    }

    // ---------------------------------------------------

    // 4. (EXEMPLO) VALIDAÇÃO DE FORMULÁRIO
    // Se você tiver um formulário de contato, a validação deve ir aqui.
    // Exemplo:
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', (event) => {
    //         // Implemente sua lógica de validação aqui:
    //         // if (!validarCampos()) {
    //         //     event.preventDefault(); // Impede o envio se a validação falhar
    //         //     alert('Por favor, preencha todos os campos obrigatórios!');
    //         // }
    //     });
    // }
    
    // ---------------------------------------------------

    // 4. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO (Requisito)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        
        // Elementos do formulário
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const formMessage = document.getElementById('formMessage');

        // Elementos de feedback de erro
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        // Função para validar o formato do e-mail usando RegEx
        const isValidEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        // Função principal de validação
        const validateForm = () => {
            let isValid = true;

            // 1. Limpa estados anteriores
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            formMessage.classList.add('hidden');
            
            nameInput.classList.remove('input-invalid');
            emailInput.classList.remove('input-invalid');
            messageInput.classList.remove('input-invalid');

            // 2. Validação do Nome (Obrigatório)
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'O campo Nome é obrigatório.';
                nameInput.classList.add('input-invalid');
                isValid = false;
            }

            // 3. Validação do E-mail (Obrigatório e Formato)
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'O campo E-mail é obrigatório.';
                emailInput.classList.add('input-invalid');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Por favor, insira um e-mail válido.';
                emailInput.classList.add('input-invalid');
                isValid = false;
            }

            // 4. Validação da Mensagem (Obrigatório)
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'O campo Mensagem é obrigatório.';
                messageInput.classList.add('input-invalid');
                isValid = false;
            }

            return isValid;
        };

        contactForm.addEventListener('submit', (event) => {
            // Impede o envio padrão do formulário (Requisito de Simulação)
            event.preventDefault(); 
            
            if (validateForm()) {
                // Se a validação for bem-sucedida, simula o envio
                
                const submitButton = contactForm.querySelector('.btn-submit');
                
                // 1. Desabilita o botão e muda o texto
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';

                // 2. Simula um atraso de 1 segundo para o processamento
                setTimeout(() => {
                    // 3. Exibe mensagem de sucesso
                    formMessage.classList.remove('hidden');
                    formMessage.classList.add('success-message');
                    formMessage.textContent = 'Mensagem enviada com sucesso! Em breve, entrarei em contato.';

                    // 4. Limpa o formulário
                    contactForm.reset();

                    // 5. Reabilita o botão
                    submitButton.disabled = false;
                    // Note: O texto do botão pode precisar de lógica i18n se você o traduziu
                    submitButton.textContent = 'Enviar Mensagem'; 
                }, 1000); // 1 segundo de simulação

            } else {
                // Rola a tela para o primeiro campo com erro
                const firstInvalid = document.querySelector('.input-invalid');
                if (firstInvalid) {
                    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    // ---------------------------------------------------
});