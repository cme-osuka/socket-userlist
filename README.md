# Userlist-övning

I denna övningen har jag tillhandahållit en grund för backenden samt frontenden.
Alla paket som behövs är installerade, så det är bara att köra npm install i respektive mapp.

Tips: Osäker på hur något skrivs? Öppna upp dokumentationen och läs igenom den - hittar du ingen lösning så är det bara att googla på!

## Det du behöver implementera är:

Frontenden:
- Anslutning till servern (import, initialisera)
- Sätta upp lyssnare som lyssnar på eventsen angivna i backenden
- Reagera på dessa event (uppdatera/skriv ut listan på användare, berätta för servern vad användaren heter när den ansluter)

Backenden:
- Funktionaliteten i event-callbacksen (när en användare ansluter, när den disconnectar)

Optional:
- Lägg till möjligheten att byta namn


## Förslag på steg/ordning:
1. Börja med backenden och ta logiken för ett event i taget
2. Sätt sedan upp det du behöver i frontenden för att ansluta till servern
3. Ansluten? Börja med "new_user" - får du vad du förväntar dig i backenden?
4. Börja sedan med "updated_users" på frontenden, skriv ut en lista på användare.
5. Testa - öppna två rutor sida vid sida, ser du två användare?

## Hint:
- På `socket` på servern finns det en nyckel som heter `id`.
- Går det inte "mappa" ett objekt? Finns det någon metod på `object` som kan hjälpa dig omvandla det till en array?