<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hackney');

/** MySQL database username */
define('DB_USER', 'hackney');

/** MySQL database password */
define('DB_PASSWORD', 'LbuX5HsbGDStLLt9');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '~AZ.[g1Ut@_ReUx}}_*^;MMFpI!Xxzyx1W??JjRMgy(b,2%[(wP[35l}+nNf.r|5');
define('SECURE_AUTH_KEY',  '#U`lu&SiKr<|Wi4V&V@_`g4( 8NMiO;-fSPwufV0 YF<Y:d2*L&!XIe<k6tC(1F1');
define('LOGGED_IN_KEY',    ';I)H{Pixwx8.q_bU]NvkLmOq;5p]B_PI4ndD8K_F;]dz->4SV,6>C2[V /ni^p:J');
define('NONCE_KEY',        '=m^~_6[#E=!J@T5/{0[)$9c{TtzO>lC{C5VILvoi}#aI.i$qH,qrtAs3]|$)oQ,.');
define('AUTH_SALT',        'v<o8MtgZ=33zpk:2-U|H|=[%slgh4X<hAZFSzJtd:JLubYl.3:l#l!*ZVA{uSQjj');
define('SECURE_AUTH_SALT', '_qFGh,:R$!H+_=H5ShCowo_ZwWfwIfzceN!<rms^On8w3J_``3OF?ZZf^r3Oa4g-');
define('LOGGED_IN_SALT',   'o~A7TDjVBSC?XoH%9Z15);CfM+Mi,;:RMiE p~3xQ,V[Uf@6pSs5+;P`xq+Z%Z{B');
define('NONCE_SALT',       '|^^rW|gob]YvmX}o&6?~+_u[wqdSp;{6I{oPe!E0_azZN<$a{YucP]ilI }J+AH@');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
