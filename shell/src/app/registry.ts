import { loadRemoteModule } from '@angular-architects/module-federation';

export const registry = {
    mfe2: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './web-components'
    })
};
