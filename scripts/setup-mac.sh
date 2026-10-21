#!/bin/bash

echo "=========================================="
echo "Personal Finance Organizer"
echo "macOS Environment Setup"
echo "=========================================="
echo ""

echo "Checking Homebrew..."

if command -v brew >/dev/null 2>&1; then
    echo "✅ Homebrew installed."
else
    echo "❌ Homebrew not found."
    echo ""
    echo "Homebrew is required to install project dependencies."
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

echo ""
echo "Checking Git..."

if command -v git >/dev/null 2>&1; then
    echo "✅ Git installed."
else
    echo "❌ Git not found."
    echo "Installing Git..."
    brew install git
fi

echo ""
echo "Checking Node.js..."

if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js installed."
    node --version
else
    echo "❌ Node.js not installed."
    echo ""
    echo "Node.js is required to run the Personal Finance Organizer frontend."
    echo "Installing Node.js..."
    brew install node
fi

echo ""
echo "Checking npm..."

if command -v npm >/dev/null 2>&1; then
    echo "✅ npm installed."
    npm --version
else
    echo "❌ npm not found."
fi

echo ""
echo "Checking npx..."

if command -v npx >/dev/null 2>&1; then
    echo "✅ npx installed."
    npx --version
else
    echo "❌ npx not found."
fi

echo ""
echo "Environment setup complete."