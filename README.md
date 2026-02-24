# 🍔 Dev Burger - Front-end

Esta é a aplicação Front-end do projeto Dev Burger, um sistema completo de e-commerce para restaurantes. O projeto engloba desde a experiência do usuário (UX) no catálogo e carrinho de compras até um painel administrativo robusto para o gerenciamento de pedidos e produtos.

## 🧾 Visão Geral

- **Foco Principal**: Interface interativa com consumo de API RESTful.
- **Gerenciamento de Estado**: Utilização nativa da Context API para carrinho e sessão.
- **Pagamentos**: Checkout real integrado via Stripe.
- **Persistência**: Da dos do carrinho salvos via localStorage.

## 🚀 Tecnologias e Ferramentas

- **React (JSX, Hooks) + Vite**: Framework principal e tooling para alta performance de build.
- **Styled-components**: Estilização baseada em CSS-in-JS, garantindo escopo e componentização.
- **Axios**: Cliente HTTP para consumo eficiente da API do back-end.
- **React-Router-Dom**: Gerenciamento de rotas (Públicas e Privadas/Admin).
- **@stripe/react-stripe-js**: Biblioteca oficial para integração segura de checkout.
- **Material-UI (MUI) & React-Select**: Componentes avançados para tabelas, colapsos parciais e seleções customizadas no painel admin.
- **React-Toastify**: Sistema de notificações dinâmicas em tempo real (toasts).
- **Phosphor-Icons / Lucide-React**: Iconografia moderna.

## ⚙️ Funcionalidades Principais

✅ **Jornada do Cliente (B2C)**: Página inicial com banner, carrossel de categorias e listagem de produtos com adição dinâmica ao carrinho.<br>
✅ **Carrinho Inteligente**: Sistema persistente com contador no Header e notificações dinâmicas ao adicionar itens.<br>
✅ **Checkout Seguro**: Fluxo de pagamento totalmente funcional integrado ao Stripe.<br>
✅ **Painel Administrativo (B2B)**: Navegação lateral customizada (SideNavAdmin) com proteção de rotas.<br>
✅ **Gestão Completa (CRUD)**: Páginas para visualização, criação, edição e exclusão de Produtos.<br>
✅ **Controle de Pedidos**: Atualização de status dos pedidos (Preparando, Pronto, etc.) via react-select.<br>

## 💻 Instalação e Configuração

Pré-requisitos: - Node.js (>= 16 recomendado)
API Back-end rodando e configurada na mesma rede.

1. Clone o repositório
2. Instale as dependências
3. Configure o ambiente(.env)
4. Rode com yarn dev o npm run dev

## 📸 Demonstração

## 📸 Demonstração

<p align="center">
  <img src="https://github.com/user-attachments/assets/2960ab80-28f8-4de5-830c-1d1bcdc31c40" width="600" alt="DevBurger Desktop">

<br>
<br>
  <img src="https://github.com/user-attachments/assets/5bae6c72-de18-449d-9203-e8595624a84d" width="600" alt="DevBurger Desktop">

<br>
<br>


  <img src="https://github.com/user-attachments/assets/17e783df-5f19-417a-bed5-c4395f7506ae" width="600" alt="DevBurger Desktop">


<br>
<br>

  <img src="https://github.com/user-attachments/assets/5a708ea1-fd48-4046-b151-04a3a1a837be" width="600" alt="DevBurger Desktop">

<br>
<br>

  <img src="https://github.com/user-attachments/assets/17e783df-5f19-417a-bed5-c4395f7506ae" width="600" alt="DevBurger Desktop">

<br>
<br>


<p align="center" >
<img width="600" height="742" alt="Image" src="https://github.com/user-attachments/assets/eb500b2c-fd43-48c7-87c2-131e459ace45" /><br>
<br>
<img width="600" height="742" alt="Image" src="https://github.com/user-attachments/assets/acf265cf-9a40-480b-8341-1749df1c63bb" /><br>
<br>
<img width="600" height="742" alt="Image" src="https://github.com/user-attachments/assets/ac497610-7188-4af1-8170-3adbdcc41b65" /><br>
<br>
<img width="600" height="742" alt="Image" src="https://github.com/user-attachments/assets/85f8a9d7-e0d5-424a-b4c4-c51df61e479c" /><br>
<br>
<img width="600" height="742" alt="Image" src="https://github.com/user-attachments/assets/0665f354-d931-46c2-85b9-a8175691c504" />

</p>




