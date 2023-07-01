import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-text-format',
    templateUrl: './text-format.component.html',
    styleUrls: ['./text-format.component.scss'],
    animations : fuseAnimations
})
export class TextFormatComponent implements OnInit {
    @Input() config;
    @Output() playSpeach = new EventEmitter();
    @Output() pauseSpeach = new EventEmitter();
    @Output() stopSpeach = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    play(config: any): void {
        this.playSpeach.emit(config.id);
        config.playButton = !config.playButton;
        config.pauseButton = !config.pauseButton;
    }

    pause(config: any): void {
        this.pauseSpeach.emit(config?.id);
        config.pauseButton = !config.pauseButton;
        config.playButton = !config.playButton;
    }
}
