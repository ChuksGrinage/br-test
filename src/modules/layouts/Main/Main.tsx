import React from 'react';
import { Header } from 'modules/components';
import styles from './Main.module.css';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={styles.mainLayout}>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout;
