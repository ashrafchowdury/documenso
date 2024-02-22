import { adminRouter } from './admin-router/router';
import { authRouter } from './auth-router/router';
import { bannerRouter } from './banner-router/router';
import { cryptoRouter } from './crypto/router';
import { documentRouter } from './document-router/router';
import { fieldRouter } from './field-router/router';
import { profileRouter } from './profile-router/router';
import { recipientRouter } from './recipient-router/router';
import { shareLinkRouter } from './share-link-router/router';
import { singleplayerRouter } from './singleplayer-router/router';
import { teamRouter } from './team-router/router';
import { templateRouter } from './template-router/router';
import { router } from './trpc';
import { twoFactorAuthenticationRouter } from './two-factor-authentication-router/router';

export const appRouter = router({
  auth: authRouter,
  banner: bannerRouter,
  crypto: cryptoRouter,
  profile: profileRouter,
  document: documentRouter,
  field: fieldRouter,
  recipient: recipientRouter,
  admin: adminRouter,
  shareLink: shareLinkRouter,
  singleplayer: singleplayerRouter,
  team: teamRouter,
  template: templateRouter,
  twoFactorAuthentication: twoFactorAuthenticationRouter,
});

export type AppRouter = typeof appRouter;
