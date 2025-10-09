const getStorageApps = () => {
    const app = localStorage.getItem('install-app')
    if (app) {
        const installApp = JSON.parse(app)
        return installApp;
    }
    return []
}

const saveInstallApps = (app) => {
    localStorage.setItem('install-app', JSON.stringify(app))
}

const addInstallApps = (apps) => {
    const allApps = getStorageApps();
    allApps.push(apps)
    saveInstallApps(allApps)
}

// uninstall apps
const uninstall = (id) => {
    const allInstallApps = getStorageApps();
    const currentApps = allInstallApps.filter(app => app.id !== parseInt(id))
    saveInstallApps(currentApps)
}
export { getStorageApps, addInstallApps ,uninstall}