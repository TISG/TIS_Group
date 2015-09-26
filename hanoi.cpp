#include <stdio.h>
#include <conio.h>

void hanoi(int cislo, char from, char tmp, char into) {
	if (cislo > 0) {
		hanoi(cislo-1, from, into, tmp);
		printf("Presuvam disk %d z veze %c na %c.\n", cislo, from, into);
		hanoi(cislo-1, tmp, from, into);
	}
}

int main()
{   
	int pocet;
	printf("Zadaj aka vysoka je veza A: ");
	scanf("%d", &pocet);
	printf("\n");
	hanoi(pocet, 'A', 'B', 'C');
	printf("\n");
	int vysledok = 1;
	for (int i = 0; i<pocet; i++) vysledok = vysledok*2;
	printf("Krokov celkovo: %i", vysledok-1);
	getch();
}
//skuska uploadu na github cez git shell