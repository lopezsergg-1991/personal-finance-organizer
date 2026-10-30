#!/bin/bash

echo "Resetting Personal Finance Organizer development data..."

rm -f ~/.config/personal-finance-organizer/*.db 2>/dev/null

echo ""
echo "NOTE:"
echo "Current implementation uses browser localStorage."
echo "To fully reset current data:"
echo ""
echo "1. Launch the application"
echo "2. Open DevTools"
echo "3. Clear localStorage"
echo ""
echo "This script will evolve once SQLite becomes the primary store."