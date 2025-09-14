import { PestFactory } from '../../../dist';

async function bootstrap() {
  console.log('🚀 Starting the RestInPests example...\n');
  
  // Method 1: Standard pest creation
  console.log('=== Standard Pest Creation ===');
  const app = await PestFactory.create();
  console.log('📦 Standard app created:', app);
  
  console.log('\n=== Chaotic Pest Unleashing ===');
  // Method 2: Chaotic pest creation
  const chaosApp = await PestFactory.unleashChaos();
  console.log('🌪️ Chaos app created:', chaosApp);
  
  console.log('\n=== Refined Pest Cultivation ===');
  // Method 3: Refined pest creation
  const refinedApp = await PestFactory.cultivatePests();
  console.log('🎩 Refined app created:', refinedApp);
  
  console.log('\n🎉 All your pest-infested REST APIs are ready to buzz!');
  console.log('💡 Tip: Each method creates the same app, just with different... personality!');
}

bootstrap().catch(console.error);