import React, { useState } from 'react';
import styles from '../../styles/Dashboard.module.scss';
import Cuisines from '../../components/DashBoard/cuisines.jsx';
import Profile from '../../components/DashBoard/profile.jsx';
import Setting from '../../components/DashBoard/settings.jsx';
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('settings');
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            router.push({
                pathname: '/'
            });
        }
    }, [session, router]);

    const switchComponent = (componentName) => {
        setActiveComponent(componentName);

        // Redirect based on the button clicked
        if (componentName === 'settings') {
            router.push({
                pathname: '/settings',
                query: { user: session.data.user.name, email: session.data.user.email },
            });
        } else if (componentName === 'cuisines') {
            router.push({
                pathname: '/cusinies',
                query: { user: session.data.user.name, email: session.data.user.email },
            });
        } else if (componentName === 'profile') {
            router.push({
                pathname: '/profile',
                query: { user: session.data.user.name, email: session.data.user.email },
            });
        }
    };

    return ( <
        div className = { styles.dashboardContainer } >
        <
        div className = { styles.sideMenu } >
        <
        button onClick = {
            () => switchComponent('settings')
        } > Settings < /button> <
        button onClick = {
            () => switchComponent('cuisines')
        } > Cuisines < /button> <
        button onClick = {
            () => switchComponent('profile')
        } > Profile < /button> < /
        div > <
        div className = { styles.dashboardContent } > { activeComponent === 'cuisines' && < Cuisines / > } { activeComponent === 'settings' && < Setting / > } { activeComponent === 'profile' && < Profile / > } <
        /div> < /
        div >
    );
}