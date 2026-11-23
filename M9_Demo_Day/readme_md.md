# Stok Prontu 📦🛒

> **Gestão diária de inventário, vendas e troco para o comércio local.**

O **Stok Prontu** é uma solução *no-code/low-code* desenvolvida para simplificar a gestão operacional de pequenos e médios estabelecimentos comerciais. A aplicação centraliza o controlo de stock em tempo real, o registo ágil de vendas no balcão, o cálculo automático de troco e a emissão instantânea de recibos em PDF.

---

## 📌 O Problema

Muitos pequenos comerciantes em Cabo Verde enfrentam desafios diários no controlo do seu negócio, tais como:
- **Rotura de stock inesperada:** Dificuldade em acompanhar as saídas e saber exatamente quais artigos precisam de reposição.
- **Erros no cálculo de trocos e totais:** Falhas manuais durante o atendimento em momentos de maior afluência.
- **Falta de comprovativos profissionais:** Ausência de um sistema simples e rápido para emitir recibos claros e personalizados aos clientes.
- **Custos elevados de software tradicional:** Soluções de POS/ERP complexas que exigem infraestrutura dispendiosa e ligação constante à internet.

## 💡 A Solução Proposta

O **Stok Prontu** resolve estes problemas ao oferecer uma aplicação móvel e desktop intuitiva, de baixo custo e com suporte a funcionamento *offline*, permitindo:
1. **Validação Ativa de Inventário:** Impedir vendas acima da quantidade real em stock através de regras automáticas no formulário (`Valid If`).
2. **Cálculo Automático de Vendas e Troco:** Atualização instantânea dos subtotais, total da compra e valor a devolver ao cliente.
3. **Emissão de Recibos em PDF:** Geração automática e envio de recibos com design profissional e harmonizado com a identidade visual da marca.
4. **Organização na Nuvem:** Gravação direta de todos os documentos gerados numa estrutura organizada no Google Drive.

---

## 🛠️ Ferramentas & Stack Tecnológico

A arquitetura do projeto apoia-se num ecossistema moderno e eficiente de ferramentas Google:

* **Plataforma de Desenvolvimento (Frontend/App):** [AppSheet](https://www.appsheet.com/) (No-Code Framework).
* **Base de Dados (Backend/Data Layer):** [Google Sheets](https://www.google.com/sheets/about/).
* **Motor de Documentos & Modelos:** [Google Docs](https://www.google.com/docs/about/) (para templates dinâmicos de recibos com sintaxe `<<Start>>` / `<<End>>`).
* **Armazenamento de Ficheiros:** [Google Drive](https://www.google.com/drive/) (para arquivo de recibos PDF e recursos visuais).
* **Design & Identidade Visual:** Figma / Photoshop (Criação de logótipo, paleta de cores e prototipagem visual).

---

## ⚙️ Funcionalidades Principais

* 📦 **Gestão Dinâmica de Stock:** Colunas virtuais que calculam o stock atualizado automaticamente com base nas entradas e saídas de mercadoria.
* 🛡️ **Proteção contra Vendas Sem Stock:** Alertas e bloqueios automáticos caso a quantidade inserida supere o inventário disponível.
* 💳 **Registo Rápido de Vendas:** Seleção de produtos com cálculo automático de subtotal por item.
* 💵 **Gestão de Pagamentos:** Registo do valor entregue pelo cliente com cálculo automático de troco (garantindo valores não negativos).
* 📄 **Automação de Recibos em PDF:** Disparo de *Bot* de automação ao finalizar cada venda, gerando um documento estilizado com a marca **Stok Prontu**.

---

## 👥 Equipa de Desenvolvimento

O projeto foi concebido e executado por uma equipa dedicada de 2 elementos:

| Membro | Responsabilidades & Foco Técnico |
| :--- | :--- |
| **Desenvolvedor App & Dados** | • Modelação da base de dados no Google Sheets.<br>• Configuração de tabelas, relações e colunas virtuais no AppSheet.<br>• Implementação de fórmulas de validação (`Valid If`), somatórios e cálculo de troco.<br>• Configuração dos *Bots* de automação para geração de PDF.<br>• Produção do vídeo demonstrativo da aplicação. |
| **Designer & Documentador Técnico** | • Criação da identidade visual completa e logótipo da marca **Stok Prontu**.<br>• Definição da paleta de cores (#5C321E / Castanho Institucional).<br>• Concepção e estilização do modelo de recibo no Google Docs.<br>• Elaboração de especificações técnicas, manuais e documentação do projeto. |

---

## 📁 Estrutura do Repositório

```text
├── docs/
│   ├── manual_utilizador.pdf       # Guia prático de utilização da app
│   └── especificacao_tecnica.md    # Documentação de fórmulas e colunas virtuais
├── templates/
│   └── template_recibo.docx        # Modelo base do Google Docs para a automação
├── media/
│   ├── logo_stok_prontu.png        # Recurso gráfico oficial
│   └── demonstracao_app.mp4        # Vídeo demonstrativo da app em execução
└── README.md                       # Documentação principal do repositório
```

---

## 🚀 Como Testar / Replicar o Projeto

1. Faça uma cópia da estrutura da base de dados no **Google Sheets** (tabelas `Produtos`, `Vendas` e `Itens_Venda`).
2. Crie uma nova aplicação no **AppSheet** a partir da folha de cálculo copiada.
3. Importe o modelo de recibo disponível na pasta `/templates` para o seu **Google Docs**.
4. Configure um *Bot* de automação no AppSheet associado ao evento `Data Change` (tabela `Vendas`), apontando a tarefa de criação de PDF para o ficheiro no Google Docs.

---

### 📝 Licença & Uso
Este projeto foi desenvolvido para fins demonstrativos e académicos de gestão comercial. Sentir-se livre para adaptar e reutilizar a estrutura para o seu próprio negócio.