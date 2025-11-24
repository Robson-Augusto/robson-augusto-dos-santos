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
    
});