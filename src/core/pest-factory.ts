/**
 * PestFactory - The amusing equivalent to NestFactory
 * Because every REST API needs a few pests to keep things interesting!
 */

export interface PestApplication {
  // For now, this is just an empty object
  // Future: will contain methods like listen(), use(), etc.
}

export class PestFactory {
  /**
   * Creates a new pest-infested application
   * @param module The root module (currently unused, returns empty object)
   * @returns A freshly spawned pest application
   */
  static async create(module?: any): Promise<PestApplication> {
    console.log('🐛 Spawning pests in your REST API...');
    console.log('🦗 Cricket sounds intensify...');
    console.log('🐜 Ants are marching through your endpoints...');
    
    // For now, return an empty object
    // This will be expanded to include actual application logic
    const app: PestApplication = {};
    
    console.log('✨ Your pest colony is ready to serve!');
    return app;
  }

  /**
   * Alternative creation method for those who prefer chaos
   * @param module The root module (currently unused)
   * @returns A wildly infested application
   */
  static async unleashChaos(module?: any): Promise<PestApplication> {
    console.log('🦟 RELEASING THE SWARM...');
    console.log('🕷️ Spiders are weaving your web framework...');
    console.log('🐛 Bugs are features in disguise!');
    
    return this.create(module);
  }

  /**
   * For the more refined pest enthusiasts
   * @param module The root module (currently unused)
   * @returns An elegantly pest-ridden application
   */
  static async cultivatePests(module?: any): Promise<PestApplication> {
    console.log('🎩 *Tips hat* Cultivating a sophisticated pest ecosystem...');
    console.log('🦋 Adding some butterflies for aesthetic appeal...');
    console.log('🐝 Buzzing with productivity!');
    
    return this.create(module);
  }
}