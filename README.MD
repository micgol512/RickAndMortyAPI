Zadanie polega na stworzeniu aplikacji webowej wykorzystującej publiczne API "Rick and Morty" do wyświetlania listy postaci w formie kafelków. Aplikacja ma umożliwiać użytkownikowi filtrowanie postaci według nazwy, statusu życia (żywy/martwy/nieznany), a także przeglądanie wyników za pomocą paginacji. Celem tego zadania jest rozwijanie umiejętności pracy z zewnętrznymi API.

⮞ Link do "https://rickandmortyapi.com/"

Zadanie obejmuje następujące wytyczne:

⮞ Dla każdej postaci należy przygotować odpowiedni kafelek, który będzie zawierał grafikę, nazwę, status oraz gatunek postaci.

⮞ Należy dodać mechanizm paginacji, który umożliwi użytkownikowi przeglądanie listy postaci. Użytkownik będzie mógł nawigować do następnej i poprzedniej strony wyników za pomocą przycisków. Paginacja powinna znajdować się pod kafelkami z postaciami.

⮞ W aplikacji należy umieścić pole wyszukiwania, które pozwoli użytkownikom filtrować postacie po nazwie. Wyszukiwanie powinno być dynamiczne, co oznacza, że wyniki wyświetlania będą aktualizowane w miarę wpisywania tekstu. Każda zmiana w wyszukiwarce powinna skutkować wysłaniem nowego zapytania do bazy i zwróceniem tylko tych danych, które spełniają określone kryteria.

⮞ Dodaj trzy przyciski radio, które umożliwią filtrowanie postaci według ich statusu. Domyślnie filtr statusu będzie ustawiony na "żywy" (alive). Przełączanie między różnymi statusami powinno spowodować wyświetlanie tylko tych postaci, które mają określony status.

⮞ Wszystkie dane powinny być pobierane z backendu i bezpośrednio wyświetlane. Nie przetwarzamy żadnych danych na froncie, a jedynie pobieramy je z API i prezentujemy użytkownikowi.

⮞ W przypadku, gdy wyniki nie spełnią kryteriów wyszukiwania należy wyświetlić komunikat “Nie znaleziono postaci spełniających kryteria wyszukiwania.”
