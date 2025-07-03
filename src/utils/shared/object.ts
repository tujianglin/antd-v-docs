/**
 * 将实例的所有方法绑定到该实例
 * @param instance 要绑定方法的实例对象
 */
export function bindMethods<T extends object>(instance: T): void {
  const prototype = Reflect.getPrototypeOf(instance);
  if (prototype === null) return;
  const propertyNames = Reflect.ownKeys(prototype);
  propertyNames.forEach((propertyName) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(prototype, propertyName);
    if (!descriptor) return;
    const key = propertyName as keyof T;
    const propertyValue = instance[key];
    if (
      typeof propertyValue === 'function' &&
      propertyName !== 'constructor' &&
      !descriptor.get &&
      !descriptor.set &&
      descriptor.writable !== false
    ) {
      instance[key] = propertyValue.bind(instance);
    }
  });
}
