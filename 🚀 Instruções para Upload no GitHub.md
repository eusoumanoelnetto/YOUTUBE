# 🚀 Instruções para Upload no GitHub

## Passos para subir o projeto para o GitHub

### 1. Criar Repositório no GitHub
1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** no canto superior direito
3. Escolha **"New repository"**
4. Configure o repositório:
   - **Repository name**: `youtube-clone-santander`
   - **Description**: `Clone do YouTube desenvolvido no Curso Front-End Santander DIO`
   - **Visibility**: Public (recomendado para portfólio)
   - **NÃO** marque "Add a README file" (já temos um)
   - **NÃO** marque "Add .gitignore" (já temos um)
   - **License**: MIT (opcional)

### 2. Conectar Repositório Local ao GitHub
Execute os seguintes comandos no terminal:

```bash
# Navegar para o diretório do projeto
cd youtube-clone-santander

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/youtube-clone-santander.git

# Verificar se o remote foi adicionado corretamente
git remote -v

# Fazer push do código para o GitHub
git push -u origin master

# Fazer push das tags
git push --tags
```

### 3. Configurar GitHub Pages (Opcional)
Para hospedar o projeto gratuitamente no GitHub Pages:

1. No repositório do GitHub, vá em **Settings**
2. Role até a seção **Pages**
3. Em **Source**, selecione **"Deploy from a branch"**
4. Escolha a branch **master** e pasta **/ (root)**
5. Clique em **Save**
6. O site estará disponível em: `https://SEU_USUARIO.github.io/youtube-clone-santander`

### 4. Atualizar README com Links
Após o upload, atualize o README.md com:
- Link do repositório GitHub
- Link do deploy (se usar GitHub Pages)
- Seu perfil GitHub nos créditos

### 5. Comandos Git Úteis para Futuras Atualizações

```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "📝 Descrição da mudança"

# Enviar para GitHub
git push origin master

# Criar nova tag de versão
git tag -a v1.1.0 -m "🔄 Nova versão com melhorias"
git push --tags
```

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado com `git push`
- [ ] Tags enviadas com `git push --tags`
- [ ] README atualizado com links corretos
- [ ] GitHub Pages configurado (opcional)
- [ ] Projeto adicionado ao portfólio

## 🎯 Dicas Importantes

1. **Nome do Repositório**: Use um nome descritivo e profissional
2. **Descrição**: Inclua palavras-chave como "React", "YouTube Clone", "DIO"
3. **Topics**: Adicione tags no GitHub: `react`, `youtube-clone`, `frontend`, `dio`, `santander`
4. **README**: Mantenha sempre atualizado com screenshots e instruções claras
5. **Commits**: Use mensagens descritivas e emojis para melhor organização

## 📱 Compartilhamento

Após o upload, você pode compartilhar:
- **LinkedIn**: Poste sobre o projeto concluído
- **Portfólio**: Adicione o link do repositório
- **Currículo**: Mencione as tecnologias utilizadas
- **DIO**: Compartilhe na comunidade da plataforma

---

**Projeto desenvolvido durante o Curso Front-End Santander DIO** 🎓

