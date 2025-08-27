#!/bin/bash

echo "🚀 Script para subir site para GitHub"
echo ""

# Verificar se já tem remote configurado
if git remote get-url origin 2>/dev/null; then
    echo "✅ Remote origin já configurado"
    git remote -v
else
    echo "❌ Remote origin não configurado"
    echo ""
    echo "📝 Você precisa criar um repositório no GitHub primeiro:"
    echo "1. Acesse https://github.com"
    echo "2. Clique em 'New repository'"
    echo "3. Nome sugerido: site-para-ana"
    echo "4. Marque como PÚBLICO"
    echo "5. NÃO inicialize com README"
    echo ""
    echo "🔗 Depois execute:"
    echo "git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git"
    echo "git push -u origin main"
    exit 1
fi

echo ""
echo "📤 Fazendo push para GitHub..."
git push

echo ""
echo "✅ Site enviado para GitHub!"
echo ""
echo "🌐 Para ativar GitHub Pages:"
echo "1. Vá para Settings do repositório"
echo "2. Role até 'Pages'"
echo "3. Source: Deploy from a branch"
echo "4. Branch: main"
echo "5. Folder: / (root)"
echo "6. Save"
echo ""
echo "🎯 Seu site estará em: https://SEU_USUARIO.github.io/NOME_DO_REPO/"
