const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onCLose = () => {
        tg.close();
    }
    const onToggle = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onCLose,
        onToggle,
    }
}