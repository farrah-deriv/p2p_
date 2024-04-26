import { DerivProductDerivP2pBrandLightLogoWordmarkHorizontalIcon } from '@deriv/quill-icons';
import { useAuthData } from '@deriv-com/api-hooks';
import { Button } from '@deriv-com/ui';
import { LocalStorageConstants, LocalStorageUtils, URLUtils } from '@deriv-com/utils';
import './Header.scss';

// TODO: handle local storage values not updating after changing local storage values
const Header = () => {
    const { activeLoginid, logout } = useAuthData();
    const appId = LocalStorageUtils.getValue(LocalStorageConstants.configAppId);
    const serverUrl = localStorage.getItem(LocalStorageConstants.configServerURL.toString());
    const oauthUrl =
        appId && serverUrl
            ? `https://${serverUrl}/oauth2/authorize?app_id=${appId}&l=EN&&brand=deriv`
            : URLUtils.getOauthURL();

    return (
        <div className='header'>
            <DerivProductDerivP2pBrandLightLogoWordmarkHorizontalIcon width='100' />
            {activeLoginid ? (
                <Button onClick={logout}>Logout</Button>
            ) : (
                <a
                    href={oauthUrl}
                    className='bg-solid-coral-800 text-body-sm text-opacity-white-800 rounded-200 px-800 py-300 font-bold'
                >
                    Login
                </a>
            )}
        </div>
    );
};

export default Header;
