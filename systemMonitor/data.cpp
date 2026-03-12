#include <iostream>
#include <windows.h>

int main() {
    // Struktura pro uložení informací o paměti
    MEMORYSTATUSEX stavPameti;
    stavPameti.dwLength = sizeof(MEMORYSTATUSEX);

    // Funkce Windows, která zjistí stav RAM
    if (GlobalMemoryStatusEx(&stavPameti)) {
        // dwMemoryLoad vrací přímo procento využití (0-100)
        std::cout << stavPameti.dwMemoryLoad << std::endl;
    } else {
        // Pokud by se něco pokazilo, vypíšeme chybu
        std::cerr << "Chyba pri cteni pameti" << std::endl;
        return 1;
    }

    return 0;
}