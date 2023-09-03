export function switchColor(element?: number) {
    switch (element) {
        case (1):
            return 'ephys';
        case (2):
            return 'eice';
        case (3):
            return 'elight';
        case (4):
            return 'efire';
        default:
            return 'redprimary';
    }
}