#!/bin/bash

echo "=========================================="
echo "Personal Finance Organizer"
echo "macOS Environment Setup"
echo "=========================================="
echo ""

verify_tool() {
    TOOL_NAME="$1"
    TOOL_COMMAND="$2"

    if command -v "$TOOL_COMMAND" >/dev/null 2>&1; then
        echo "✅ $TOOL_NAME"
        return 0
    else
        echo "❌ $TOOL_NAME"
        return 1
    fi
}

echo "Checking Homebrew..."

if command -v brew >/dev/null 2>&1; then
    echo "✅ Homebrew installed."
else
    echo "❌ Homebrew not found."
    echo ""
    echo "Homebrew is required to install project dependencies."
    echo "Installing Homebrew..."

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    if command -v brew >/dev/null 2>&1; then
        echo "✅ Homebrew installed successfully."
    else
        echo "❌ Homebrew installation failed."
    fi
fi

echo ""
echo "Checking Git..."

if command -v git >/dev/null 2>&1; then
    echo "✅ Git installed."
    git --version
else
    echo "❌ Git not found."
    echo "Git is required for source control."
    echo "Installing Git..."

    brew install git

    if command -v git >/dev/null 2>&1; then
        echo "✅ Git installed successfully."
    else
        echo "❌ Git installation failed."
    fi
fi

echo ""
echo "Checking Node.js..."

if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js installed."
    node --version
else
    echo "❌ Node.js not installed."
    echo ""
    echo "Node.js is required to build and run the frontend."
    echo "Installing Node.js..."

    brew install node

    if command -v node >/dev/null 2>&1; then
        echo "✅ Node.js installed successfully."
        node --version
    else
        echo "❌ Node.js installation failed."
    fi
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
echo "Checking Rust..."

if command -v rustc >/dev/null 2>&1; then
    echo "✅ Rust installed."
    rustc --version
else
    echo "❌ Rust not installed."
    echo ""
    echo "Rust is required by Tauri to build the desktop application."
    echo "Installing Rust..."

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

    source "$HOME/.cargo/env"

    if command -v rustc >/dev/null 2>&1; then
        echo "✅ Rust installed successfully."
        rustc --version
    else
        echo "❌ Rust installation failed."
    fi
fi

echo ""
echo "Checking Cargo..."

if command -v cargo >/dev/null 2>&1; then
    echo "✅ Cargo installed."
    cargo --version
else
    echo "❌ Cargo not found."
fi

echo ""
echo "Checking SQLite..."

if command -v sqlite3 >/dev/null 2>&1; then
    echo "✅ SQLite installed."
    sqlite3 --version
else
    echo "❌ SQLite not found."
    echo ""
    echo "SQLite will be used as the local project database."
    echo "Installing SQLite..."

    brew install sqlite

    if command -v sqlite3 >/dev/null 2>&1; then
        echo "✅ SQLite installed successfully."
        sqlite3 --version
    else
        echo "❌ SQLite installation failed."
    fi
fi

echo ""
echo "=========================================="
echo "Environment Verification"
echo "=========================================="

verify_tool "Homebrew" "brew"
verify_tool "Git" "git"
verify_tool "Node.js" "node"
verify_tool "npm" "npm"
verify_tool "npx" "npx"
verify_tool "Rust" "rustc"
verify_tool "Cargo" "cargo"
verify_tool "SQLite" "sqlite3"

echo ""
echo "=========================================="
echo "Setup Complete"
echo "=========================================="
echo ""

echo "If all required components display a ✅ above,"
echo "your system is ready for Personal Finance Organizer development."