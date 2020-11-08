function newActionType(prefix: string, type: string): string {
    return `@${prefix}/${type}`;
}

export { newActionType };
