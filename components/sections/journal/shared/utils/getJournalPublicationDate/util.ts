export const getJournalPublicationDate = (createdAt: string): string => {
    const dateObject = new Date(createdAt).getTime()
    const dateNowObject = new Date().getTime()

    const differenceDate = dateNowObject - dateObject

    const conversionToSecond = differenceDate / 1000

    switch (true) {
        case (conversionToSecond < 10):
            return ("Только что")
        case (conversionToSecond < 60):
            return ("Меньше минуты назад")
        case (conversionToSecond < 3600):
            return ("Меньше часа назад")
        case (conversionToSecond < 7200):
            return ("Меньше 2-х часов назад")
        case (conversionToSecond < 10800):
            return ("Меньше 3-х часов назад")
        case (conversionToSecond < 86400):
            return ("Сегодня")
        case (conversionToSecond < 172800):
            return ("Вчера")
        case (conversionToSecond < 172800):
            return ("Вчера")
        default:
            // 
            break
    }
}