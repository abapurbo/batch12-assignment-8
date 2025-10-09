import React, { createContext, useEffect, useState } from 'react';
import { addInstallApps, getStorageApps, uninstall } from '../utilites/InstallationLocalStorage';
import { toast } from 'react-toastify';

export const AppContext = createContext({});

export default function AuthContext({ children }) {
    const localApps = getStorageApps()
    const [installApps, setInstallApps] = useState([...localApps])
    // sucess toast 
    const notify = () => {
        toast.success('Your App Successfuly install!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const deleteApp = () => {
        toast.success('Your App Successfuly Uninstall!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleAddApps = (app) => {
        if (app) {
            setInstallApps([...installApps, app])
            addInstallApps(app)
            notify()
        }
    }
    //unInstall app
    const handleUinstallApp = id => {
        const localInstalData=getStorageApps()
        uninstall(id)
        const uninstallApp=localInstalData.filter(data=>data.id !== parseInt(id))
        setInstallApps([...uninstallApp])
        deleteApp()
    }

    const authValue = {
        handleAddApps,
        installApps,
        handleUinstallApp
    };

    return (
        <AppContext.Provider value={authValue}>
            {children}
        </AppContext.Provider>
    );
}

