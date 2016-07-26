/**
 * Created by moonlit on 2016/7/26 0026.
 */

// Home菜单操作标识
HomeMenuActionTypes = {
    MenuItemStart : 100,
    MenuItemSetting : 101,
    MenuItemHelp : 102
};

// 定义敌人类型
EnemyTypes = {
    Enemy_Stone : 0,    // 陨石
    Enemy_1 : 1,        // 敌机1
    Enemy_2 : 2,        // 敌机2
    Enemy_Planet : 3    // 行星
};

// 定义敌人名称，也是敌人精灵帧的名字
EnemyName = {
    Enemy_Stone : "gameplay.stone1.png",
    Enemy_1 : "gameplay.enemy_1.png",
    Enemy_2 : "gameplay.enemy_2.png",
    Enemy_Planet : "gameplay.enemy.planet.png"
};

// 游戏场景中使用的标签常量
GameSceneNodeTag = {
    StatusBarFighterNode : 301,
    StatusBarLifeNode : 302,        // （猜测）代表生命值的节点
    StatusBarScore : 303,           // （猜测）代表分数的节点
    BatchBackground : 800,          // （猜测）代表背景的节点
    Fighter : 900,                  // （猜测）代表飞机的节点
    ExplosionParticleSystem : 901,  // （猜测）代表粒子效果的节点
    Bullet : 100,                   // （猜测）代表子弹的节点
    Enemy : 700                     // （猜测）代表敌人的节点
};

// 精灵速度常量
Sprite_Velocity = {
    Enemy_Stone : cc.p(0, -200),
    Enemy_1 : cc.p(0, -50),
    Enemy_2 : cc.p(0, -60),
    Enemy_planet : cc.p(0, -40),
    Bullet : cc.p(0, 300)
};

// 游戏分数
EnemyScores = {
    Enemy_Stone : 5,
    Enemy_1 : 10,
    Enemy_2 : 15,
    Enemy_Planet : 20
};

// 敌人初始生命值
Enemy_initialHitPoints = {
    Enemy_Stone : 1,
    Enemy_1 : 2,
    Enemy_2 : 3,
    Enemy_Planet : 4
};

// 我方飞机生命数
Fighter_hitPoints = 5;

// 碰撞类型
Collisiton_Type = {
    Enemy : 1,
    Fighter : 1,
    Bullet : 1
};

// 保存音效状态键
EFFECT_KEY = "sound_key";
// 保存声音状态键
MUSIC_KEY = "music_key";
// 保存最高记录键
HIGHSCORE_KEY = "highscore_key";

// 自定义的布尔常量
BOOL = {
    NO : "0",
    YES : "1"
};
